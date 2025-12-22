import DatabaseConnection from './index';
import { 
  Users, 
  Subjects, 
  Sessions, 
  Modules,
  StudentProfiles,
  Assignments,
  Quizzes,
} from './init-models';
// Enums are available if needed
// import { ArticlesStatusEnum, ModulesStatusEnum } from './enums';
import { Op } from 'sequelize';

async function exampleUsage() {
  try {
    const sequelize = DatabaseConnection.getInstance({
      database: process.env.DB_NAME || 'pkbm_db',
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      dialect: 'postgres',
    });

    await DatabaseConnection.connect();

    const models = DatabaseConnection.getModels();

    console.log('=== Example 1: Create User ===');
    const newUser = await models.Users.create({
      email: 'teacher@pkbm.com',
      full_name: 'Ahmad Guru',
      password: 'hashed_password_here',
      created_at: new Date(),
      updated_at: new Date(),
    });
    console.log('Created user:', newUser.id);

    console.log('\n=== Example 2: Create Subject ===');
    const subject = await models.Subjects.create({
      name: 'Matematika Dasar',
      subject_code: 'MAT101',
      duration_hours: 40,
      level: 1,
      teacher_id: newUser.id,
      description: 'Pelajaran matematika dasar',
      thumbnail: 'https://example.com/thumbnail.jpg',
      slug: 'matematika-dasar',
      created_at: new Date(),
      updated_at: new Date(),
    });
    console.log('Created subject:', subject.id);

    console.log('\n=== Example 3: Query with Relations ===');
    const subjectWithTeacher = await models.Subjects.findOne({
      where: { id: subject.id },
      include: [
        {
          model: models.Users,
          as: 'teacher',
          attributes: ['id', 'full_name', 'email'],
        },
      ],
    });
    console.log('Subject with teacher:', subjectWithTeacher?.toJSON());

    console.log('\n=== Example 4: Find Users with Conditions ===');
    const recentUsers = await models.Users.findAll({
      where: {
        created_at: {
          [Op.gte]: new Date('2024-01-01'),
        },
        is_banned: false,
      },
      limit: 10,
      order: [['created_at', 'DESC']],
    });
    console.log(`Found ${recentUsers.length} recent users`);

    console.log('\n=== Example 5: Simple Query with Relations ===');
    const articlesWithAuthor = await models.Articles.findAll({
      include: [
        {
          model: models.Users,
          as: 'author',
          attributes: ['id', 'full_name', 'email'],
        },
      ],
      limit: 5,
      order: [['created_at', 'DESC']],
    });
    console.log(`Found ${articlesWithAuthor.length} articles with author info`);

    console.log('\n=== Example 6: Transaction Example ===');
    const t = await sequelize.transaction();
    try {
      const student = await models.Users.create(
        {
          email: 'student@pkbm.com',
          full_name: 'Budi Siswa',
          password: 'hashed_password',
          created_at: new Date(),
          updated_at: new Date(),
        },
        { transaction: t }
      );

      const profile = await models.StudentProfiles.create(
        {
          user_id: student.id!,
          national_student_number: '2024001',
          current_gpa: 3.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        { transaction: t }
      );

      await t.commit();
      console.log('✅ Student and profile created successfully');
    } catch (error) {
      await t.rollback();
      console.error('❌ Transaction failed:', error);
    }

    console.log('\n=== Example 7: Complex Query ===');
    const subjectCount = await models.Subjects.count({
      where: {
        is_available: true,
      },
    });
    console.log(`Total available subjects: ${subjectCount}`);

    console.log('\n=== Example 8: Update and Delete ===');
    await models.Users.update(
      { 
        full_name: 'Ahmad Guru Updated',
        updated_at: new Date(),
      },
      { where: { id: newUser.id } }
    );
    console.log('✅ User updated');

    await DatabaseConnection.close();
    console.log('\n✅ All examples completed successfully!');

  } catch (error) {
    console.error('❌ Error in examples:', error);
    await DatabaseConnection.close();
    process.exit(1);
  }
}

if (require.main === module) {
  exampleUsage();
}

export default exampleUsage;

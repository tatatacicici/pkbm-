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
import { Op } from 'sequelize';

async function exampleUsage() {
  try {
    const sequelize = DatabaseConnection.getInstance({
      database: process.env.DB_NAME || 'pkbm_db',
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      dialect: 'postgres',
    });

    await DatabaseConnection.connect();

    const models = DatabaseConnection.getModels();

    console.log('=== Example 1: Create User ===');
    const newUser = await models.Users.create({
      email: 'teacher@pkbm.com',
      fullName: 'Ahmad Guru', // full_name -> fullName
      password: 'hashed_password_here',
      createdAt: new Date(), // created_at -> createdAt
      updatedAt: new Date(), // updated_at -> updatedAt
    });
    console.log('Created user:', newUser.id);

    console.log('\n=== Example 2: Create Subject ===');
    const subject = await models.Subjects.create({
      name: 'Matematika Dasar',
      subjectCode: 'MAT101', // subject_code -> subjectCode
      durationHours: 40, // duration_hours -> durationHours
      level: 1,
      teacherId: newUser.id, // teacher_id -> teacherId
      description: 'Pelajaran matematika dasar',
      thumbnail: 'https://example.com/thumbnail.jpg',
      slug: 'matematika-dasar',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log('Created subject:', subject.id);

    console.log('\n=== Example 3: Query with Relations ===');
    const subjectWithTeacher = await models.Subjects.findOne({
      where: { id: subject.id },
      include: [
        {
          model: models.Users,
          as: 'teacher',
          attributes: ['id', 'fullName', 'email'], // full_name -> fullName
        },
      ],
    });
    console.log('Subject with teacher:', subjectWithTeacher?.toJSON());

    console.log('\n=== Example 4: Find Users with Conditions ===');
    const recentUsers: any[] = await models.Users.findAll({
      where: {
        createdAt: {
          // created_at -> createdAt
          [Op.gte]: new Date('2024-01-01'),
        },
        isBanned: false, // is_banned -> isBanned
      },
      limit: 10,
      order: [['createdAt', 'DESC']],
    });
    console.log(`Found ${recentUsers.length} recent users`);

    console.log('\n=== Example 5: Simple Query with Relations ===');
    const articlesWithAuthor: any[] = await models.Articles.findAll({
      include: [
        {
          model: models.Users,
          as: 'author',
          attributes: ['id', 'fullName', 'email'],
        },
      ],
      limit: 5,
      order: [['createdAt', 'DESC']],
    });
    console.log(`Found ${articlesWithAuthor.length} articles with author info`);

    console.log('\n=== Example 6: Transaction Example ===');
    const t = await sequelize.transaction();
    try {
      const student = await models.Users.create(
        {
          email: 'student@pkbm.com',
          fullName: 'Budi Siswa',
          password: 'hashed_password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { transaction: t }
      );

      const profile = await models.StudentProfiles.create(
        {
          userId: student.id!, // user_id -> userId
          nationalStudentNumber: '2024001', // national_student_number -> nationalStudentNumber
          currentGpa: 3.5, // current_gpa -> currentGpa
          createdAt: new Date(),
          updatedAt: new Date(),
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
        isAvailable: true, // is_available -> isAvailable
      },
    });
    console.log(`Total available subjects: ${subjectCount}`);

    console.log('\n=== Example 8: Update and Delete ===');
    await models.Users.update(
      {
        fullName: 'Ahmad Guru Updated', // full_name -> fullName
        updatedAt: new Date(),
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

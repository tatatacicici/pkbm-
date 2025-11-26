API Payload & Response DocumentationDokumentasi lengkap untuk endpoint Authentication, User Profile, Articles, Certificates, dan Events.1. AUTHENTICATION — /api/authPOST /api/auth/registerMendaftarkan pengguna baru.Request Body{
  "email": "user@example.com",
  "password": "secret123",
  "fullName": "John Doe",
  "phoneNumber": "08123456789",
  "userName": "johndoe"
}
Success Response{
  "success": true,
  "message": "Registration successful",
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "fullName": "John Doe",
      "avatar": null,
      "phoneNumber": "08123456789",
      "userName": "johndoe",
      "isEmailVerified": false,
      "isPhoneVerified": false,
      "createdAt": "...",
      "updatedAt": "..."
    },
    "token": "JWT_TOKEN"
  }
}
POST /api/auth/loginMasuk sebagai pengguna terdaftar.Request Body{
  "email": "user@example.com",
  "password": "secret123"
}
Success Response{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "fullName": "John Doe",
      "avatar": null,
      "phoneNumber": "08123456789",
      "userName": "johndoe",
      "isEmailVerified": false,
      "isPhoneVerified": false,
      "createdAt": "...",
      "updatedAt": "..."
    },
    "token": "JWT_TOKEN"
  }
}
POST /api/auth/logoutKeluar dari sesi (tidak memerlukan payload).Response{
  "success": true,
  "message": "Logout successful"
}
POST /api/auth/refreshMemperbarui token akses.Request Body{
  "refreshToken": "REFRESH_JWT"
}
Response{
  "success": true,
  "message": "Token refreshed successfully",
  "data": {
    "token": "NEW_ACCESS_TOKEN"
  }
}
POST /api/auth/change-passwordMengganti kata sandi (harus dalam keadaan login).Request Body{
  "oldPassword": "secret123",
  "newPassword": "newSecret456"
}
Response{
  "success": true,
  "message": "Password changed successfully"
}
POST /api/auth/reset-passwordMereset kata sandi (biasanya via OTP/Email).Request Body{
  "email": "user@example.com"
}
GET /api/auth/profileMendapatkan profil pengguna saat ini (dari token).Response{
  "success": true,
  "message": "Profile retrieved successfully",
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "fullName": "John Doe",
      "avatar": null,
      "phoneNumber": "08123456789",
      "userName": "johndoe",
      "bio": null,
      "gender": null,
      "isEmailVerified": false,
      "isPhoneVerified": false,
      "createdAt": "...",
      "updatedAt": "..."
    }
  }
}
2. USER PROFILE — /api/v1/userGET /api/v1/user/profileMendapatkan profil dasar pengguna.Response{
  "success": true,
  "message": "Profile retrieved successfully",
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "fullName": "John Doe",
    "avatar": null,
    "phoneNumber": "08123456789",
    "userName": "johndoe",
    "bio": "some text",
    "gender": "male",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
GET /api/v1/user/profile/meMendapatkan profil lengkap beserta status kelengkapan data.Response{
  "success": true,
  "message": "Profile loaded",
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "fullName": "John Doe",
    "avatar": null,
    "phoneNumber": "08123456789",
    "userName": "johndoe",
    "bio": "Hello world",
    "gender": "male",
    "createdAt": "...",
    "updatedAt": "...",
    "isProfileCompleted": true
  }
}
PUT /api/v1/user/profileMemperbarui informasi profil pengguna.Request Body{
  "fullName": "New Name",
  "phoneNumber": "089999999",
  "userName": "newusername",
  "bio": "updated bio",
  "gender": "female"
}
Response{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "fullName": "New Name",
    "avatar": null,
    "phoneNumber": "089999999",
    "userName": "newusername",
    "bio": "updated bio",
    "gender": "female",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
PUT /api/v1/user/profile/avatarMengunggah atau memperbarui foto profil.Form Dataavatar: <file> (Binary)Response{
  "success": true,
  "message": "Avatar updated successfully",
  "data": {
    "avatar": "/uploads/avatar/abc123.png"
  }
}
POST /api/v1/user/profile/completeMenyelesaikan profil secara paksa (untuk onboarding).Request Body{
  "fullName": "John Doe",
  "phoneNumber": "0812345678",
  "gender": "male",
  "userName": "johndoe"
}
Response{
  "success": true,
  "message": "Profile completed successfully",
  "data": {
    "id": "uuid",
    "fullName": "John Doe",
    "gender": "male",
    "phoneNumber": "0812345678",
    "userName": "johndoe"
  }
}
3. ARTICLES — /api/v1/articleGET /api/v1/articleMendapatkan daftar artikel (pagination + filter + search).Query Parameters| Name | Type | Description || :--- | :--- | :--- || page | number | default: 1 || limit | number | default: 10 || category | string | optional || search | string | search in title & content |Example RequestGET /api/v1/article?page=1&limit=10&search=pythonSuccess Response{
  "success": true,
  "message": "Articles retrieved successfully",
  "data": {
    "articles": [
      {
        "id": "uuid",
        "title": "Intro to Python",
        "slug": "intro-to-python",
        "thumbnail": "...",
        "category": "Programming",
        "excerpt": "....",
        "views": 420,
        "viewCount": 420,
        "likeCount": 10,
        "createdAt": "...",
        "updatedAt": "..."
      }
    ],
    "meta": {
      "total": 1,
      "page": 1,
      "limit": 10,
      "totalPages": 1
    }
  }
}
GET /api/v1/article/{id}Mendapatkan detail artikel berdasarkan ID (auto-increment views).Response{
  "success": true,
  "message": "Article retrieved successfully",
  "data": {
    "id": "uuid",
    "title": "Intro to Python",
    "content": "....",
    "category": "Programming",
    "slug": "intro-to-python",
    "views": 421,
    "viewCount": 421,
    "likeCount": 10,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
GET /api/v1/article/slug/{slug}Mendapatkan detail artikel berdasarkan Slug (auto-increment views).Example RequestGET /api/v1/article/slug/intro-to-pythonResponse{
  "success": true,
  "message": "Article retrieved successfully",
  "data": {
    "id": "uuid",
    "title": "Intro to Python",
    "slug": "intro-to-python",
    "content": "...."
  }
}
POST /api/v1/articleMembuat artikel baru (Requires Admin).Request Body{
  "authorId": "uuid",
  "categoryId": "uuid",
  "title": "Intro to Python",
  "content": "Long article content...",
  "thumbnail": "/uploads/articles/thumb.png",
  "slug": "intro-to-python",
  "excerpt": "Short intro...",
  "tags": "python,intro,basic"
}
Response{
  "success": true,
  "message": "Article created successfully",
  "data": {
    "id": "uuid",
    "title": "Intro to Python",
    "slug": "intro-to-python",
    "views": 0,
    "viewCount": 0,
    "likeCount": 0,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
PUT /api/v1/article/{id}Memperbarui artikel yang sudah ada.Request Body{
  "title": "New Title",
  "content": "Updated content...",
  "thumbnail": "/uploads/articles/new.png",
  "excerpt": "Updated short text",
  "tags": "updated,tag,python"
}
Response{
  "success": true,
  "message": "Article updated successfully",
  "data": {
    "id": "uuid",
    "title": "New Title",
    "updatedAt": "..."
  }
}
DELETE /api/v1/article/{id}Menghapus artikel secara soft delete (set deletedAt).Response{
  "success": true,
  "message": "Article deleted successfully"
}
GET /api/v1/article/{id}/relatedMendapatkan 5 artikel terkait berdasarkan kategori.Response{
  "success": true,
  "message": "Related articles retrieved",
  "data": [
    {
      "id": "uuid",
      "title": "Python Intermediate",
      "slug": "python-intermediate",
      "categoryId": "uuid",
      "createdAt": "..."
    }
  ]
}
POST /api/v1/article/{id}/favoriteToggle status favorit (Like/Unlike).Response (When Added){
  "success": true,
  "message": "Article added to favorites",
  "data": {
    "isFavorite": true
  }
}
Response (When Removed){
  "success": true,
  "message": "Article removed from favorites",
  "data": {
    "isFavorite": false
  }
}
4. CERTIFICATES — /api/v1/certificateGET /api/v1/certificateMendapatkan semua sertifikat yang dimiliki user.Response{
  "success": true,
  "message": "Certificates retrieved successfully",
  "data": [
    {
      "id": "uuid",
      "studentId": "uuid",
      "type": "SUBJECT",
      "name": "Completion of Math Basics",
      "fileUrl": "/uploads/certificates/math.pdf",
      "createdAt": "2024-01-02T00:00:00Z"
    }
  ]
}
GET /api/v1/certificate/subjectMendapatkan semua sertifikat berbasis mata pelajaran (Subject).Response{
  "success": true,
  "message": "Subject certificates retrieved successfully",
  "data": [
    {
      "id": "uuid",
      "type": "SUBJECT",
      "name": "Introduction to Python",
      "createdAt": "2024-01-02T00:00:00Z"
    }
  ]
}
GET /api/v1/certificate/eventMendapatkan semua sertifikat partisipasi acara (Event).Response{
  "success": true,
  "message": "Event certificates retrieved successfully",
  "data": [
    {
      "id": "uuid",
      "type": "EVENT",
      "eventName": "Tech Expo 2024",
      "createdAt": "2024-02-05T00:00:00Z"
    }
  ]
}
5. EVENTS — /api/v1/eventGET /api/v1/eventMendapatkan daftar acara dengan pagination.Query Parameters| Name | Type | Description || :--- | :--- | :--- || page | number | default: 1 || limit | number | default: 10 |Response{
  "success": true,
  "message": "Events retrieved",
  "data": {
    "events": [
      {
        "id": "uuid",
        "title": "Career Fair 2024",
        "description": "...",
        "location": "Auditorium",
        "dateStart": "2024-04-10T08:00:00Z",
        "dateEnd": "2024-04-10T16:00:00Z",
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ],
    "meta": {
      "total": 1,
      "page": 1,
      "limit": 10,
      "totalPages": 1
    }
  }
}
GET /api/v1/event/{id}Mendapatkan detail acara.Response{
  "success": true,
  "message": "Event retrieved successfully",
  "data": {
    "id": "uuid",
    "title": "Career Fair 2024",
    "description": "...",
    "dateStart": "2024-04-10T08:00:00Z",
    "dateEnd": "2024-04-10T16:00:00Z",
    "location": "Auditorium"
  }
}
GET /api/v1/event/meMendapatkan semua acara yang telah didaftarkan oleh pengguna.Response{
  "success": true,
  "message": "Registered events retrieved",
  "data": [
    {
      "id": "uuid-reg",
      "eventId": "uuid",
      "fullName": "User",
      "emailAddress": "user@email.com",
      "token": "unique-token",
      "createdAt": "2024-01-02T00:00:00Z"
    }
  ]
}
GET /api/v1/event/incomingMendapatkan acara mendatang (Top 10 terdekat).Response{
  "success": true,
  "message": "Upcoming events retrieved",
  "data": [
    {
      "id": "uuid",
      "title": "Seminar AI",
      "dateStart": "2024-10-12T07:00:00Z"
    }
  ]
}
GET /api/v1/event/historyMendapatkan riwayat acara pengguna (acara masa lalu).Response{
  "success": true,
  "message": "Event history retrieved",
  "data": [
    {
      "registration": {
        "eventId": "uuid",
        "fullName": "User",
        "createdAt": "2024-01-01"
      },
      "event": {
        "id": "uuid",
        "title": "Past Seminar",
        "dateEnd": "2023-12-01"
      }
    }
  ]
}
POST /api/v1/event/{id}/registerMendaftarkan pengguna saat ini ke acara.Response (Success){
  "success": true,
  "message": "Registered successfully",
  "data": {
    "eventId": "uuid",
    "fullName": "User",
    "emailAddress": "user@mail.com",
    "token": "generated-id",
    "createdAt": "2024-01-02T00:00:00Z"
  }
}
Response (Already Registered){
  "success": false,
  "message": "Already registered to this event"
}
POST /api/v1/eventAdmin: Membuat acara baru.Request Body{
  "title": "Career Fair 2024",
  "description": "...",
  "location": "Auditorium",
  "dateStart": "2024-04-10T08:00:00Z",
  "dateEnd": "2024-04-10T16:00:00Z"
}
Response{
  "success": true,
  "message": "Event created",
  "data": {
    "id": "uuid",
    "title": "Career Fair 2024"
  }
}
PUT /api/v1/event/{id}Update acara (Admin).Response{
  "success": true,
  "message": "Event updated successfully",
  "data": {
    "id": "uuid",
    "title": "Updated Title"
  }
}
DELETE /api/v1/event/{id}Soft delete acara.Response{
  "success": true,
  "message": "Event deleted successfully"
}

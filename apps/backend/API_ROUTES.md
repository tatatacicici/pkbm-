# API Routes Documentation

## Overview
Backend API untuk KampusGratis Platform dengan format response standar:
```json
{
  "success": true,
  "message": "Success message",
  "data": { ... }
}
```

Semua route menggunakan prefix `/api` dan versioning `/v1` atau `/v2`.

## Authentication Routes

### Auth - `/api/auth`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| POST | `/register` | No | Register user baru | Users |
| POST | `/login` | No | Login user | Users |
| POST | `/logout` | Yes | Logout user | - |
| POST | `/refresh` | No | Refresh access token | - |
| POST | `/change-password` | Yes | Ubah password | Users |
| POST | `/reset-password` | No | Reset password dengan OTP | Users, Otps |
| GET | `/profile` | Yes | Get user profile | Users |

### Email Verification - `/api/v1/email-verification`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| POST | `/request` | No | Request OTP untuk verifikasi email | Otps |
| POST | `/verify` | No | Verify email dengan OTP | Users, Otps |

### Reset Password - `/api/v1/reset-password`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| POST | `/request` | No | Request OTP untuk reset password | Otps |
| POST | `/verify` | No | Verify OTP reset password | Otps |

## User Routes

### User Profile - `/api/v1/user`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/profile` | Yes | Get user profile | Users |
| GET | `/profile/me` | Yes | Get current user profile | Users |
| PUT | `/profile` | Yes | Update user profile | Users |
| PUT | `/profile/avatar` | Yes | Update user avatar | Users |
| POST | `/profile/complete` | Yes | Complete user profile | Users |

## Article Routes

### Articles - `/api/v1/article`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/` | No | Get all articles (paginated) | Articles |
| GET | `/filter` | No | Filter articles | Articles |
| GET | `/:id` | No | Get article by ID | Articles |
| GET | `/related/:id` | No | Get related articles | Articles |
| POST | `/` | Yes | Create new article | Articles |
| PUT | `/:id` | Yes | Update article | Articles |
| DELETE | `/:id` | Yes | Delete article (soft delete) | Articles |
| POST | `/favorite/:id` | Yes | Toggle favorite article | ArticlesFavorites |

## Subject Routes

### Subjects - `/api/v1/subject`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/` | No | Get all subjects (paginated) | Subjects |
| GET | `/:id` | No | Get subject by ID | Subjects |
| POST | `/` | Yes | Create new subject | Subjects |
| PUT | `/:id` | Yes | Update subject | Subjects |
| DELETE | `/:id` | Yes | Delete subject (soft delete) | Subjects |

## Event Routes

### Events - `/api/v1/event`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/` | No | Get all events (paginated) | Events |
| GET | `/:id` | No | Get event by ID | Events |
| POST | `/` | Yes | Create new event | Events |
| PUT | `/:id` | Yes | Update event | Events |
| DELETE | `/:id` | Yes | Delete event (soft delete) | Events |

### Student Events - `/api/v1/student-event`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| POST | `/` | Yes | Register to event | EventParticipants |
| GET | `/registered` | Yes | Get registered events | EventParticipants |
| GET | `/incoming` | Yes | Get incoming events | Events |
| GET | `/history` | Yes | Get event history | EventParticipants |

## Faculty & Major Routes

### Faculty - `/api/v1/faculty`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/` | No | Get all faculties | Faculties |
| GET | `/:id` | No | Get faculty by ID | Faculties |
| POST | `/` | Yes | Create new faculty | Faculties |
| PUT | `/:id` | Yes | Update faculty | Faculties |
| DELETE | `/:id` | Yes | Delete faculty (soft delete) | Faculties |

### Major - `/api/v1/major`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/` | No | Get all majors | Majors |
| GET | `/:id` | No | Get major by ID | Majors |
| POST | `/` | Yes | Create new major | Majors |
| PUT | `/:id` | Yes | Update major | Majors |
| DELETE | `/:id` | Yes | Delete major (soft delete) | Majors |

### Student Major - `/api/v1/student-major`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| POST | `/` | Yes | Enroll student to major | StudentMajors |

## Dashboard Routes

### Dashboard - `/api/v1/dashboard`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/` | Yes | Get dashboard data | Users, StudentSubjects, EventParticipants, Notifications |

## Notification Routes

### Notifications - `/api/v1/notification`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/` | Yes | Get all notifications (paginated) | Notifications |
| PUT | `/:id/read` | Yes | Mark notification as read | Notifications |
| PUT | `/read-all` | Yes | Mark all notifications as read | Notifications |

## Certificate Routes

### Certificates - `/api/v1/certificate`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/` | Yes | Get user certificates | Certificates |
| GET | `/subject` | Yes | Get subject certificates | Certificates |
| GET | `/event` | Yes | Get event certificates | Certificates |

## Leaderboard Routes

### Leaderboard - `/api/v1/leaderboard`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/` | No | Get global leaderboard (paginated) | LeaderboardHistories, Users |
| GET | `/faculty/:facultyId` | No | Get faculty leaderboard | LeaderboardHistories, Users |
| GET | `/major/:majorId` | No | Get major leaderboard | LeaderboardHistories, Users |
| GET | `/semester/:semesterId` | No | Get semester leaderboard | LeaderboardHistories, Users |

## Grade Routes

### Grades - `/api/v1/scores`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/subjects` | Yes | Get subject grades | - (To be implemented) |

## Calendar Routes

### Calendar - `/api/v1/calendar`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/schedule` | Yes | Get user schedule | - (To be implemented) |

## Administration Routes

### Administration - `/api/v1/administration` & `/api/v2/administration`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/college` | Yes | Get administration data | - (To be implemented) |
| GET | `/constants` | Yes | Get administration constants | - (To be implemented) |
| GET | `/biodatas` | Yes | Get biodata | - (To be implemented) |
| PUT | `/biodatas` | Yes | Update biodata | - (To be implemented) |
| GET | `/file` | Yes | Get files | - (To be implemented) |
| POST | `/file` | Yes | Upload file | - (To be implemented) |
| GET | `/major` | Yes | Get administration major data | - (To be implemented) |

## Job Routes

### Jobs - `/api/v1/job`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/` | No | Get all jobs | - (To be implemented) |
| GET | `/constants` | No | Get job constants | - (To be implemented) |

### Job Applications - `/api/v1/job-apply`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| POST | `/` | Yes | Apply for job | - (To be implemented) |
| GET | `/user` | Yes | Get user job applications | - (To be implemented) |

## Discussion Routes

### Discussions - `/api/v2/discussions`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/` | No | Get all discussions | - (To be implemented) |
| GET | `/forum` | No | Get forum discussions | - (To be implemented) |
| POST | `/forum` | Yes | Create forum discussion | - (To be implemented) |
| POST | `/comments` | Yes | Add comment | - (To be implemented) |
| POST | `/reply` | Yes | Add reply | - (To be implemented) |

### Discussion Likes - `/api/v1/discussion/like`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| POST | `/` | Yes | Toggle discussion like | - (To be implemented) |
| POST | `/comment` | Yes | Toggle comment like | - (To be implemented) |
| POST | `/reply` | Yes | Toggle reply like | - (To be implemented) |

## Study Plan Routes

### Student Subject - `/api/v1/student-subject`
| Method | Endpoint | Auth Required | Description | Model |
|--------|----------|---------------|-------------|-------|
| GET | `/enrolled` | Yes | Get enrolled subjects | - (To be implemented) |
| GET | `/studyplan` | Yes | Get study plan | - (To be implemented) |
| GET | `/major` | Yes | Get major contracts | - (To be implemented) |
| GET | `/draft` | Yes | Get draft | - (To be implemented) |
| POST | `/draft` | Yes | Create/update draft | - (To be implemented) |
| POST | `/send-draft` | Yes | Send draft for approval | - (To be implemented) |

## Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data here
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error information (optional)"
}
```

### Paginated Response
```json
{
  "success": true,
  "message": "Data retrieved successfully",
  "data": {
    "items": [...],
    "meta": {
      "total": 100,
      "page": 1,
      "limit": 10,
      "totalPages": 10
    }
  }
}
```

## Authentication

Most endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Error Codes

- **200**: Success
- **201**: Created
- **400**: Bad Request
- **401**: Unauthorized
- **404**: Not Found
- **500**: Internal Server Error

## Models Used

### Core Models
- **Users**: User accounts and profiles
- **Otps**: OTP verification codes
- **Articles**: Blog articles and content
- **ArticlesFavorites**: User favorite articles
- **Subjects**: Academic subjects
- **Events**: Event information
- **EventParticipants**: Event registrations
- **Faculties**: Academic faculties
- **Majors**: Academic majors
- **StudentMajors**: Student major enrollments
- **StudentSubjects**: Student subject enrollments
- **Notifications**: User notifications
- **Certificates**: User certificates
- **LeaderboardHistories**: Leaderboard data

### Status
✅ **Implemented**: Authentication, User, Article, Subject, Event, Faculty, Major, Dashboard, Notification, Certificate, Leaderboard  
🔄 **Stub/Placeholder**: Grade, Calendar, Administration, Job, Discussion, Study Plan (return placeholder responses)

## Notes
- Semua timestamp menggunakan ISO 8601 format
- Soft delete digunakan untuk sebagian besar entitas (deletedAt field)
- Pagination default: page=1, limit=10
- Semua endpoint menggunakan JSON untuk request dan response

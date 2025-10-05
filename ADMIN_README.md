# Admin Panel Setup

## Admin Access

The admin panel is accessible at: `/admin/login`

### Default Credentials
- **Username:** `admin`
- **Password:** `devansh123`

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Admin Authentication
ADMIN_USERNAME=admin
ADMIN_PASSWORD=devansh123

# Next.js Configuration
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

## Features

### Contact Form Submissions
- View all contact form submissions
- Filter by status (new, read, replied)
- Mark submissions as read or replied
- Delete submissions
- View submission details including:
  - Contact information
  - Message content
  - Timestamp
  - Status

### Admin Dashboard
- Real-time statistics
- Auto-refresh every 30 seconds
- Status management
- Responsive design

## Security Notes

- Change default credentials in production
- Use environment variables for sensitive data
- Implement proper session management
- Add rate limiting for API endpoints
- Use HTTPS in production

## File Structure

```
app/
├── admin/
│   ├── login/page.tsx          # Admin login page
│   └── dashboard/page.tsx      # Admin dashboard
├── api/
│   ├── admin/
│   │   ├── login/route.ts      # Admin authentication
│   │   └── submissions/route.ts # Submission management
│   └── contact/route.ts        # Contact form API
lib/
└── contactStore.ts             # In-memory data store
```

## Data Storage

Currently using in-memory storage. Data will be lost on server restart.
For production, replace with a proper database solution.

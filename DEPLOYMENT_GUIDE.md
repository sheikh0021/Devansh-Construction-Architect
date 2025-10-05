# Vercel Deployment Guide for Devansh Constro Admin System

## 🚀 Quick Setup for Vercel

### 1. Environment Variables Setup

In your Vercel dashboard, go to **Settings > Environment Variables** and add:

```
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password_here
ADMIN_SECRET=your_super_secret_key_here_2024
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

**⚠️ Important Security Notes:**
- Change the default password from `devansh123` to something secure
- Use a strong, random `ADMIN_SECRET` key
- Never commit these values to your repository

### 2. Admin Access URLs

After deployment, you can access:

- **Main Website**: `https://your-domain.vercel.app`
- **Admin Login**: `https://your-domain.vercel.app/admin/login`
- **Admin Dashboard**: `https://your-domain.vercel.app/admin/dashboard`

### 3. Default Admin Credentials

- **Username**: `admin` (or whatever you set in `ADMIN_USERNAME`)
- **Password**: Set in `ADMIN_PASSWORD` environment variable

### 4. Features Available

✅ **Contact Form**: Users can submit messages through `/contact`
✅ **Admin Dashboard**: View, manage, and respond to all contact submissions
✅ **Authentication**: Secure login with JWT tokens and HTTP-only cookies
✅ **Status Tracking**: Mark messages as new, read, or replied
✅ **Auto-refresh**: Dashboard updates every 30 seconds
✅ **Responsive Design**: Works on desktop and mobile

### 5. Testing the System

1. **Test Contact Form**:
   - Go to `/contact`
   - Fill out and submit a test message
   - Verify success message appears

2. **Test Admin Access**:
   - Go to `/admin/login`
   - Login with admin credentials
   - Verify dashboard shows the test message
   - Test marking messages as read/replied
   - Test deleting messages

### 6. Security Features

- **HTTP-Only Cookies**: Prevents XSS attacks
- **Secure Cookies**: Only sent over HTTPS in production
- **JWT Tokens**: Secure authentication tokens
- **Protected Routes**: Admin pages require authentication
- **Auto-logout**: Session expires after 24 hours

### 7. Troubleshooting

**If admin login doesn't work:**
- Check environment variables are set correctly in Vercel
- Verify the `ADMIN_USERNAME` and `ADMIN_PASSWORD` match your input
- Check browser console for any errors

**If contact form doesn't work:**
- Check the `/api/contact` endpoint is accessible
- Verify form validation is working
- Check browser network tab for API errors

**If dashboard shows no messages:**
- Submit a test message through the contact form
- Check if the message appears in the dashboard
- Verify API endpoints are working

### 8. Production Considerations

- **Database**: Currently uses in-memory storage (resets on restart)
- **Scaling**: For high traffic, consider adding a database (MongoDB, PostgreSQL)
- **Backup**: Regular backups of contact submissions
- **Monitoring**: Consider adding error tracking (Sentry)

### 9. Customization

**Change Admin Credentials:**
1. Update `ADMIN_USERNAME` and `ADMIN_PASSWORD` in Vercel environment variables
2. Redeploy the application

**Modify Contact Form:**
- Edit `components/ContactForm.tsx`
- Update validation rules in `app/api/contact/route.ts`

**Customize Dashboard:**
- Edit `app/admin/dashboard/page.tsx`
- Modify the UI components and styling

## 🎉 You're All Set!

Your admin system is now ready for production use on Vercel. Users can submit contact messages, and you can manage them securely through the admin dashboard.

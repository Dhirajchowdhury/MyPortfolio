# 🚀 Quick Start Guide

## Get Your Portfolio Running in 5 Minutes!

### Step 1: Install Dependencies
```bash
cd nextjs-portfolio
npm install
```

### Step 2: Add Your Images
Create these images in `public/images/`:
- `profile.jpg` - Your main profile photo (square, 500x500px recommended)
- `photo1.jpg` through `photo6.jpg` - Personal photos for the marquee
- `project1.jpg` through `project6.jpg` - Project screenshots

**Don't have images yet?** The site will show placeholders automatically!

### Step 3: Update Your Information

Search and replace these placeholders across all files:

| Placeholder | Replace With | Example |
|------------|--------------|---------|
| `[YOUR_NAME]` | Your full name | "Dhiraj Chowdhury" |
| `[YOUR_EMAIL]` | Your email | "dhiraj@example.com" |
| `[COLLEGE_NAME]` | Your college | "Heritage Institute of Technology" |
| `[COLLEGE_ABBR]` | College abbreviation | "HIT" |
| `[GITHUB_URL]` | Your GitHub profile | "https://github.com/yourusername" |
| `[LINKEDIN_URL]` | Your LinkedIn | "https://linkedin.com/in/yourprofile" |
| `[RESUME_URL]` | Resume link | "https://drive.google.com/..." |
| `[YOUR_BIO]` | Short bio | "Passionate developer..." |
| `[STUDENT_ID]` | Your student ID | "2023CS001" |

**Quick Find & Replace:**
- VS Code: `Ctrl+Shift+H` (Windows/Linux) or `Cmd+Shift+H` (Mac)
- Search for `[YOUR_NAME]` and replace all instances

### Step 4: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

### Step 5: Customize Content

#### Update Skills
Edit `data/skills.js` - Add/remove technologies you know

#### Update Projects
Edit `data/projects.js` - Add your actual projects:
```javascript
{
  title: 'My Awesome Project',
  description: 'What it does...',
  image: '/images/project1.jpg',
  domain: 'frontend', // or 'fullstack', 'aiml', 'blockchain'
  tech: ['React', 'Node.js'],
  github: 'https://github.com/...',
  live: 'https://...'
}
```

#### Update Experience
Edit `data/experience.js` - Add your work/internship history

#### Update Achievements
Edit `data/achievements.js` - Add certifications, awards, hackathon wins

## 🎨 Quick Customization

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --accent-cyan: #00f5ff;      /* Frontend color */
  --accent-green: #39ff14;     /* AI/ML color */
  --accent-purple: #7c3aed;    /* Blockchain color */
}
```

### Change Fonts
Current fonts are loaded from Google Fonts in `app/globals.css`.
To change, update the `@import` URL and font-family values.

## 📱 Test Responsiveness

1. Open DevTools (F12)
2. Click device toolbar icon
3. Test on different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1440px

## 🚀 Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Done! Your portfolio is live! 🎉

## 🐛 Common Issues

### Issue: "Module not found"
**Solution:** Run `npm install` again

### Issue: Images not showing
**Solution:** Make sure images are in `public/images/` folder

### Issue: Animations not working
**Solution:** Clear browser cache and refresh (Ctrl+Shift+R)

### Issue: Custom cursor not visible
**Solution:** Custom cursor is hidden on mobile devices (this is intentional)

## 📚 Next Steps

1. ✅ Complete remaining sections (Projects, Experience, Blog, Contact)
2. ✅ Add real content and images
3. ✅ Test on multiple devices
4. ✅ Deploy to Vercel
5. ✅ Share with the world!

## 💡 Pro Tips

- Use high-quality images (but compress them first!)
- Keep descriptions concise and impactful
- Update your portfolio regularly with new projects
- Test on real devices, not just browser DevTools
- Ask friends for feedback before going live

## 🆘 Need Help?

- Check the main [README.md](./README.md) for detailed documentation
- Review [IMPLEMENTATION_STATUS.md](./IMPLEMENTATION_STATUS.md) for what's completed
- Open an issue on GitHub if you find bugs

---

Happy building! 🚀✨

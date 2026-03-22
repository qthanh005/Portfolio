# Portfolio Images Guide

## 📸 Adding Your Images

This portfolio has been updated to display professional images. Follow this guide to add your own images.

## Image Directories

```
public/
├── images/
│   ├── profile.jpg          # Your profile/avatar photo
│   ├── resume.pdf           # Your resume/CV
│   └── projects/
│       ├── webrtc-conference.jpg
│       ├── ml-engine.jpg
│       ├── microservices.jpg
│       └── desktop-app.jpg
```

## Required Images

### 1. Profile Image
- **Path**: `public/images/profile.jpg`
- **Recommended Size**: 400x400px (square)
- **Format**: JPG, PNG, or WebP
- **Description**: Your professional headshot or avatar
- **Tips**:
  - Use a high-quality, well-lit photo
  - Professional attire recommended
  - Solid or blurred background works best

### 2. Project Images
Add images for each project in `public/images/projects/`:

- **webrtc-conference.jpg**: Screenshot of your WebRTC video conference app
- **ml-engine.jpg**: Visualization of your ML prediction dashboard
- **microservices.jpg**: Architecture diagram or dashboard screenshot
- **desktop-app.jpg**: Screenshot of your desktop application

**Recommended Specifications**:
- **Size**: 1200x630px (16:9 aspect ratio)
- **Format**: JPG or PNG
- **File Size**: < 500KB (optimize for web)
- **Content**:
  - Application UI screenshots
  - Architecture diagrams
  - Dashboard views
  - Feature highlights

### 3. Resume/CV
- **Path**: `public/resume.pdf`
- **Format**: PDF
- **Size**: < 5MB
- **Name**: Keep as `resume.pdf`

## Image Optimization Tips

### For Profile Photos:
```bash
# Using ImageMagick (if installed)
magick convert your-photo.jpg -resize 400x400^ -gravity center -extent 400x400 profile.jpg

# Or use online tools:
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
```

### For Project Screenshots:
```bash
# Resize and optimize
magick convert screenshot.png -resize 1200x630^ -gravity center -extent 1200x630 -quality 85 project-image.jpg
```

## Updating Project Information

Edit `src/components/Projects.jsx` to update project details:

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Detailed technical description...',
    image: '/images/projects/your-project.jpg',  // Update image path
    tags: ['React', 'Node.js', 'MongoDB'],         // Update technologies
    github: 'https://github.com/yourusername/repo', // Update links
    demo: 'https://your-demo.com',
    icon: Video,  // Choose: Video, Brain, Layers, Code2
    color: 'from-blue-500 to-cyan-500'  // Choose gradient color
  }
]
```

## Updating Personal Information

### Hero Section (`src/components/Hero.jsx`):
- Update social media links (GitHub, LinkedIn, Email)
- Update resume link
- Modify name and title

### Contact Section (`src/components/Contact.jsx`):
- Update email address
- Update social media handles
- Update phone number and location

### About Section (`src/components/About.jsx`):
- Update professional profile details
- Customize technical overview
- Modify experience and expertise

## Color Gradients Available

Use these gradient classes for different sections:

```javascript
'from-blue-500 to-cyan-500'      // Blue/Tech theme
'from-purple-500 to-pink-500'    // Purple/Creative theme
'from-green-500 to-emerald-500'  // Green/Success theme
'from-orange-500 to-red-500'     // Orange/Energy theme
'from-violet-500 to-purple-500'  // Violet/AI theme
'from-gray-600 to-gray-800'      // Gray/Professional theme
```

## Icons Available

The portfolio uses:
- **Lucide React**: For general UI icons
- **React Icons**: For brand/technology logos (GitHub, LinkedIn, etc.)

To change icons, import from:
```javascript
import { IconName } from 'lucide-react'
import { SiTechnology } from 'react-icons/si'
```

## Testing Your Changes

1. Start the development server:
```bash
npm run dev
```

2. Open browser to `http://localhost:5173`

3. Check that:
   - All images load correctly
   - Links work properly
   - Responsive design looks good on mobile
   - No console errors

## Image Placeholder Behavior

If an image fails to load, the portfolio will automatically:
- Display a professional icon fallback
- Maintain layout integrity
- Show gradient background

## Need Help?

- Check browser console for errors
- Verify image paths are correct
- Ensure images are in `public/` directory
- Test image URLs in browser directly

## Quick Setup Checklist

- [ ] Add profile photo (`public/images/profile.jpg`)
- [ ] Add project screenshots (4 images in `public/images/projects/`)
- [ ] Add resume PDF (`public/resume.pdf`)
- [ ] Update personal information in components
- [ ] Update social media links
- [ ] Update project descriptions and links
- [ ] Test on desktop and mobile
- [ ] Optimize images for web
- [ ] Deploy to hosting service

---

**Note**: All images are optional. The portfolio will display professional fallback icons if images are missing.

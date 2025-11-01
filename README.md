# 🧩 takenncsUI — Bootstrap 4 Admin Template (Full Multi-Page)

**takenncsUI** is a modern, responsive multi-page admin dashboard template built with **Bootstrap 4**.

> ⚠️ This project was made out of boredom — **no support, no responsibility, no guarantees**.  
> Use it freely, at your own risk.

---

## 📜 License
**MIT License** — you can freely use, modify, rename, and redistribute for both personal and commercial purposes.

---

## 🚀 Features
- **Modern Design** — clean, professional interface with gradient accents  
- **Fully Responsive** — works perfectly on desktop, tablet, and mobile  
- **Multiple Pages** — comprehensive set of admin pages  
- **Bootstrap 4** — built on the latest Bootstrap framework  
- **Font Awesome Icons** — beautiful icons throughout  
- **Custom CSS Variables** — easy theming and customization  
- **Interactive Components** — charts, tables, forms, and more  
- **Dark Sidebar** — elegant navigation with active states  
- **Smooth Animations** — enhanced user experience  

---

## 📁 Included Pages
| Page | Path | Description |
|------|------|-------------|
| Dashboard | `index.html` | Overview with stats, charts, and quick actions |
| Guide | `pages/guide.html` | Documentation and examples |
| Components | `pages/components.html` | UI components gallery |
| Forms | `pages/forms.html` | Form elements and validation |
| Charts | `pages/charts.html` | Interactive charts (Chart.js) |
| Tables | `pages/table.html` | Data tables with search and pagination |
| Profile | `pages/profile.html` | User profile management |
| Settings | `pages/settings.html` | Application configuration |

---

## 🎨 Customization

### Colors & Styling
Edit CSS variables in `assets/css/custom.css`:

```css
:root {
  --sidebar-width: 280px;
  --brand-color: #7c3aed;
  --primary-color: #8b5cf6;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --danger-color: #ef4444;
  --body-bg: #f8fafc;
  /* ... more variables ... */
}
```

### Adding New Pages
1. Create a new HTML file in the `pages/` directory  
2. Copy structure from an existing page  
3. Update navigation menus in all pages:

```html
<li><a href="pages/your-page.html"><i class="fas fa-icon"></i> Page Name</a></li>
```

### Branding
- Replace logo and name in the sidebar header  
- Update favicon and meta tags  
- Adjust color scheme in `custom.css`

---

## 🛠 Quick Start
1. Download the template files  
2. Open `index.html` in your browser  
3. Customize colors in `assets/css/custom.css`  
4. Add your own content to the pages  
5. Deploy to your server  

---

## 📦 Dependencies
- Bootstrap **4.5.2**  
- Font Awesome **5.15.4**  
- jQuery **3.5.1**  
- Chart.js **2.9.4**  
- Popper.js  

---

## 🎯 Browser Support
- Chrome (latest)  
- Firefox (latest)  
- Safari (latest)  
- Edge (latest)  
- Mobile browsers  

---

## 🗂️ File Structure
```text
takenncsUI/
├── index.html
├── pages/
│   ├── guide.html
│   ├── components.html
│   ├── forms.html
│   ├── charts.html
│   ├── table.html
│   ├── profile.html
│   └── settings.html
├── assets/
│   ├── css/
│   │   └── custom.css
│   ├── js/
│   │   └── app.js
│   └── img/
│       └── avatar.png
├── package.json
└── README.md
```

---

## 🔧 Development

### Building from Source
No build process required — this is a pure **HTML/CSS/JS** template.

### Custom Builds
- Remove unused pages from `pages/`  
- Edit sidebar navigation in all HTML files  
- Add custom CSS to `assets/css/custom.css`  
- Extend functionality in `assets/js/app.js`  

---

## 🌟 Changelog

### v2.0.0
- Complete visual redesign  
- Added new pages (Components, Forms, Charts)  
- Enhanced sidebar navigation  
- Improved responsive design  
- Added CSS custom properties  
- Updated documentation  

### v1.0.0
- Initial release  
- Basic admin pages  
- Bootstrap 4 foundation  
- Responsive layout  

---

**Made with ❤️ — built on takenncsUI**  
Perfect for admin dashboards, CRM systems, project management tools, and custom web apps.

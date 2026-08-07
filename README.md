# Plan Aid Academy - Modern School Website & Role-Based Management Portal

A modern, responsive school website and role-based management portal built for **Plan Aid Academy** using **Next.js 14+ (App Router), TypeScript, Tailwind CSS, Recharts, and Framer Motion**.

---

## Brand Identity & Palette

- **Primary Light Blue Palette:** `#cfecf7`, `#a0d9ef`, `#62c1e5`, `#20a7db`, `#1c96c5`
- **Secondary Accent:** `#FFFFFF` (Clean background cards & space)
- **Accent Royal Blue Palette:** `#305CDE`, `#214DCF`, `#1D43B5`, `#153081`, `#0C1D4E` (Headings, buttons, dark headers)
- **Typography:** Inter sans-serif for clean readability, Amiri/Traditional Arabic typography for the Madrasah Tahfiz arm.

---

## Key Features & Structure

### 1. Public Website
- **Homepage (`/`):** Hero section with value highlights, 3 academic arms intro cards, STEM robotics lab showcase, photo gallery preview, parent testimonials, and admissions CTA banner.
- **About Us (`/about`):** School history, mission, vision, core values, founder message, and campus facilities overview.
- **Academic Arms (`/academics/*`):**
  - **Primary (`/academics/primary`):** Foundational literacy, logic & early STEM.
  - **Secondary (`/academics/secondary`):** WAEC/NECO distinction prep, flagship robotics lab.
  - **Madrasah (`/academics/madrasah`):** Quran memorization (Hifz), Tajweed science, Fiqh, Arabic grammar, Arabic typography accents & RTL text blocks.
- **Admissions (`/admissions`):** 4-step enrollment process, requirements checklist, downloadable PDF application form trigger, and interactive online inquiry form (automatically pushes leads to CRM pipeline).
- **Gallery (`/gallery`):** Category-filtered photo gallery with full-screen Lightbox viewer.
- **News & Events (`/news`):** School bulletin & announcement cards.
- **Contact Us (`/contact`):** Campus addresses (Kano, Kaduna, Abuja), contact numbers, email, interactive map preview, and direct message form.

### 2. Role-Based Portal (`/portal`)
The portal supports **4 distinct user roles**:
1. **Super Admin (`/portal/super-admin`):**
   - Account permissions & user management
   - Configure Primary, Secondary, and Madrasah classes and subjects
   - System settings (school info, brand tokens, admission cycle toggle)
   - Site-wide analytics and audit trail table
2. **Admin (`/portal/admin`):**
   - Student records & enrollment directory
   - Teaching staff profiles & class assignments
   - Admissions review inbox (approve/reject inquiries)
   - Fee tracking & payment ledger
   - Website announcements composer
3. **Teacher (`/portal/teacher`):**
   - Class rosters for assigned classes
   - Direct shortcut to enter/edit subject scores
   - Class timetable
4. **Student / Parent (`/portal/student`):**
   - Multi-child parent switcher (toggle between children)
   - Student profile card
   - Madrasah Hifz / Quran progress widget (surahs memorized, Tajweed level, Ustadh remarks)
   - Academic report cards and fee status ledger

### 3. Special Modules
- **Gradebook Module (`/portal/admin/results`):** Excel-style spreadsheet grid with inline score editing (CA1, CA2, Exam), auto total/average/grade (A–F)/class rank calculation, CSV export/import, printable Report Card generator, and SPSS-style performance analytics charts.
- **CRM Module (`/portal/admin/crm`):** Kanban drag-and-drop pipeline (New Inquiry → Contacted → Tour Scheduled → Application Submitted → Enrolled / Not Proceeding), lead profile detail drawer, follow-up task reminders, template email/SMS auto-generator, and conversion funnel charts.

---

## How Auth & Demo Role Switching Works

The project includes an interactive `AuthContext` (`src/lib/authContext.tsx`) and a top demo switcher bar on the public site and portal sidebar. You can instantly switch between **Super Admin**, **Admin**, **Teacher**, and **Student/Parent** views with one click without needing database setup.

To plug in a real backend (e.g. NextAuth.js, Clerk, or Firebase Auth):
1. Update `src/lib/authContext.tsx` to read user sessions from your auth provider.
2. Replace mock calls in `src/lib/mockData.ts` with API fetch calls to your database (Prisma / Firestore / PostgreSQL).

---

## Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open browser at http://localhost:3000
```

---

## Customizing Logo and Photos

- **Logo:** Located in `src/components/layout/Navbar.tsx` and `src/components/layout/Footer.tsx`. Swap the SVG icon with your `<Image src="/logo.png" />`.
- **Photos:** Located in `src/lib/mockData.ts`. Replace Unsplash URLs with absolute image paths or assets in `public/images/`.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 🗂 Adding a New Project — Quick Steps

1. **Copy the template**
   - Duplicate `src/content/projects/project-template.ts`
   - Rename it to match your project (e.g., `amazing-feature-launch.ts`)

2. **Fill in the details**
   - Set a unique `slug` (URL-friendly, lowercase, hyphenated)
   - Write a clear `title` and `summary`
   - Add `tags` (reuse existing where possible for better filtering)
   - Add `date` in `YYYY-MM-DD` format
   - Set `featured: true` if you want it to appear on the homepage preferentially
   - Fill in the `cover` image info (place image in `public/assets/projects/`)

3. **Write the body content**
   - `intro`: Short paragraph describing the project
   - `outcomes`: Bulleted measurable results
   - `decisions`: Bulleted key choices/trade-offs
   - `notes`: Optional extra context

4. **Add links (optional)**
   - `caseStudy`: External URL for more detail
   - `repo`: GitHub or similar (if applicable)

5. **Add it to the project index**
   - Open `src/content/projects/index.ts`
   - Import the new file:
     ```ts
     import amazingFeatureLaunch from "./amazing-feature-launch";
     ```
   - Add it to the `all` array

6. **Test locally**
   - Run:
     ```bash
     npm run dev
     ```
   - Confirm it shows up on:
     - Homepage (if featured or in back-fill)
     - `/projects` page
     - `/projects/:slug` detail page

7. **Commit and deploy**
   - Commit your changes with a clear message:
     ```bash
     git add .
     git commit -m "Add project: Amazing Feature Launch"
     git push
     ```

---
**Note:**  
Later, we can add a `yarn new:project` script to automate steps 1 and 2.

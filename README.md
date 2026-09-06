# The King's UNISEX GYM & SPA — Website

A modern, dark-mode premium fitness website built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Sections included
1. Sticky Header / Navigation
2. Hero (parallax background, animated text)
3. About Us
4. Facilities & Amenities (6 cards)
5. Gallery (real gym photos + stock)
6. Trainers / Coaching
7. Testimonials (auto-playing carousel, real Google reviews)
8. Schedule & Happy Hours
9. Membership / Pricing
10. Contact + Footer

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy: GitHub → Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: King's Gym website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/kings-gym.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repo
   - Vercel auto-detects Next.js — no config needed
   - Click **Deploy**

Every push to `main` will auto-redeploy.

## Customizing

- **Real photos**: swap the two uploaded photos in `/public/gym-1.jpeg` and `/public/gym-2.jpeg`, and replace the Unsplash URLs in `Hero.js`, `Gallery.js`, and `Trainers.js` with more of your own photos as you get them.
- **Logo**: `/public/logo.jpeg` is included but the header currently uses a text + icon logo for crisp scaling. Swap in the image logo inside `Header.js` if you'd prefer.
- **Colors**: edit `tailwind.config.js` (`onyx`, `charcoal`, `gold`, `crimson`).
- **Contact form**: the form in `Contact.js` currently just shows a success state client-side. Wire it to Formspree, EmailJS, or an API route to actually receive submissions.
- **Pricing**: edit the `plans` array in `Membership.js` with your real membership rates.

## Stock images used
Free Unsplash images (no attribution required) are used as placeholders in Hero, Gallery, and Trainers. Replace with your own gym photos whenever you can for the most authentic result.

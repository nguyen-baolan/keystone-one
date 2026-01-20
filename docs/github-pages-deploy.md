# Deploy to GitHub Pages (free) + Contact Form Emails

This repo is a Hugo site deployed to **GitHub Pages** using **GitHub Actions**.

## 1) GitHub Pages settings

In your GitHub repo:

1. **Settings → Pages**
2. **Build and deployment → Source:** select **GitHub Actions**

No `gh-pages` branch is needed (we deploy via artifacts).

## 2) How deployment works

Workflow: `.github/workflows/main.yml`

Key points:

- We build using Hugo and upload the `./public` folder as the Pages artifact.
- We set Hugo’s `--baseURL` dynamically to the Pages base URL provided by `actions/configure-pages`.
  This avoids hardcoding `baseURL` in `hugo.toml`, so **local dev stays easy**.

## 3) Contact form emails (Formspree)

GitHub Pages is static, so Netlify Forms won’t work here. We use **Formspree**.

### 3.1 Create a Formspree form

1. Go to https://formspree.io
2. Create a new form
3. Set the recipient email to: `nguyen.baolan@gmail.com` (for testing)
4. Copy the endpoint URL, it looks like:

```text
https://formspree.io/f/<formId>
```

### 3.2 Add the endpoint as a GitHub Secret

In your GitHub repo:

1. **Settings → Secrets and variables → Actions**
2. **New repository secret**
3. Name: `FORMSPREE_ACTION`
4. Value: your Formspree endpoint URL

Why a secret?

- It keeps your endpoint out of git history.
- The workflow exports it as `HUGO_FORMSPREE_ACTION`, which this repo’s Hugo security policy allows.

### 3.3 Local development

You have two options:

**Option A (recommended):** set an env var when running hugo locally:

```bash
HUGO_FORMSPREE_ACTION="https://formspree.io/f/<formId>" npm run dev
```

**Option B:** set a fallback in `config/_default/params.toml`:

```toml
contact_form_action = "https://formspree.io/f/<formId>"
```

## 4) Custom domain later (when you’re ready)

When you have a domain, GitHub Pages can serve it for free.

High-level steps:

1. **Settings → Pages → Custom domain**: enter your domain (e.g. `keystoneone.com`).
2. Configure DNS at your registrar:
   - For apex domain (`keystoneone.com`): add `A` records to GitHub Pages IPs
   - For subdomain (`www.keystoneone.com`): add a `CNAME` to `nguyen-baolan.github.io`
3. Enable **Enforce HTTPS** once GitHub finishes provisioning.

## 5) Quick troubleshooting

- **404 or broken assets:** the workflow sets `--baseURL` for Pages, so this usually indicates the workflow didn’t run or Pages isn’t set to GitHub Actions.
- **Contact form doesn’t send:** confirm `FORMSPREE_ACTION` secret is set and that your Formspree form is active.

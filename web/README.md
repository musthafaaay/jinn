# Motion / Film portfolio

A responsive, static portfolio built from the editing clips in the parent folder. It uses plain HTML, CSS, and JavaScript, so there is no build step.

## Folder structure

```text
folio/
├── index.html                 # Sends GitHub Pages visitors to web/index.html
├── .gitignore                 # Keeps unselected source clips out of Git
├── web/
│   ├── index.html             # Portfolio page content
│   ├── styles.css              # Desktop, tablet, and mobile layouts
│   ├── script.js               # Project list, filters, player, contact
│   ├── README.md               # Setup and selected clips
│   └── BEHANCE.md              # Case-study draft
├── After effects/              # Original source library
├── Davinci Resolve/            # Original source library
└── Premier pro/                # Original source library
```

## Curated picks

The site uses nine clips, all under GitHub's 100 MiB individual file limit. Paths in this table are relative to the repository root:

| Portfolio card | Source clip | Size |
| --- | --- | ---: |
| Spatial Forms | `After effects/3D/3d.mp4` | 34.0 MB |
| Colour in Layers | `Davinci Resolve/Grade & masking/Portfolio3.mp4` | 57.9 MB |
| Soft Focus | `After effects/ad video/animation.mp4` | 34.1 MB |
| Speed / Shift | `After effects/Speed Ramp/ramp.mp4` | 28.8 MB |
| One Scene, Two Looks | `Davinci Resolve/shot match/SHORT MATCH.mp4` | 9.5 MB |
| Product in Motion | `Premier pro/ad video/pr 09 01.mp4` | 20.5 MB |
| Cut to the Beat | `Davinci Resolve/fast cut/pr 1.mp4` | 29.3 MB |
| Everyday Stories | `Premier pro/content/project 1 mp4.mp4` | 94.3 MB |
| Shape the Scene | `Premier pro/green screen/Pr 06.mp4` | 77.3 MB |

The remaining source clips stay in the folder, but `.gitignore` excludes them from publishing. The selected media totals about 386 MB. Consider making short web exports before adding more footage.

## Personalize

1. Replace `hello@yourdomain.com` in `web/script.js` with your real contact address.
2. Edit the project titles, categories, and source paths in the `projects` array in `web/script.js`.
3. If a clip is replaced, update `.gitignore` so the selected file is included in Git.

## GitHub Pages

1. Create an empty GitHub repository and push this folder to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. Save. The root `index.html` forwards visitors to `web/index.html`; the site loads its videos from the parent folder. GitHub will show the public site address in the same Pages settings.

Only the nine selected videos are included by the ignore rules. Keep this in mind when selecting additional work; one source clip in the folder is over 2 GB and cannot be added to a standard GitHub repository.

## Behance case study

Use `web/BEHANCE.md` for the prepared project description and suggested story order. Behance needs a cover and uploaded media, so export a short highlight reel or a few representative stills from the selected clips before creating the project there.

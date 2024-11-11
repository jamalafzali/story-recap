# story-recap

Has it been a while since you last read your book? Are you confused as to the events of where you last left off? Try using Story Recap to jog your memory whilst being SPOILER FREE!

## Initial setup

Due to the simplicity in the web app, `story-recap` uses a mono-repo structure separating frontend and backend.

1. First you should install the dependencies:

```
cd frontend
npm install
cd ../backend
npm install
```

2. Duplicate `backend/.env.sample` and save it as `.env`. Here you should populate the API keys with your own.

3. Run the frontend and backend separately with `npm start`.

## Deployment

Both the frontend and backend are hosted via [Render](https://render.com/).

Deployments can be handled in their control panel, but also is defined by the `.render.yaml` file.

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const config = {
  unstable_includeFiles: ['test2/**/*', 'test2/*'],
};

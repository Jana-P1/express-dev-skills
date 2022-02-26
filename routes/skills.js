import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"


const router = Router()

// URL: localhost:3000/skills
router.get("/", skillsCtrl.index)

// URL: localhost:3000/skills/show
router.get("/:id", skillsCtrl.show)

export {
  router
}

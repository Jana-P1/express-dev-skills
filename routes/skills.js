import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"


const router = Router()

// URL: localhost:3000/skills
router.get("/", skillsCtrl.index)

// URL: localhost: 3000/skills/new
router.get("/new", skillsCtrl.new)

// URL: localhost:3000/skills/show
router.get("/:id", skillsCtrl.show)

// URL: localhost:3000/
router.post("/", skillsCtrl.create)

router.delete("/:id", skillsCtrl.delete)


export {
  router
}

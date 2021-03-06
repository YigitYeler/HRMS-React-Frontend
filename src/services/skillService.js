import axios from 'axios'

export default class SkillService {
    getSkills() {
        return axios.get("http://localhost:8080/api/skills/getAll")
    }

    addSkill(portfolioId, skillName) {
        return axios.post("http://localhost:8080/api/skills/add",
            {
                portfolioId: portfolioId,
                skillName: skillName
            }
        )
    }
}
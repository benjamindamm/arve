import {authoringSkills} from '../docs/authoring-skills'
import {readAuthoringSkillFrom,registerAuthoringSkillsFrom} from './authoring-tools'
import type {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js'
export const readAuthoringSkill=(skill:string,file='SKILL.md',expected?:string,offset=0,limit=6000)=>readAuthoringSkillFrom(authoringSkills,skill,file,expected,offset,limit)
export const registerAuthoringSkills=(server:McpServer)=>registerAuthoringSkillsFrom(server,authoringSkills)

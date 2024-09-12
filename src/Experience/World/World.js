import Experience from '../Experience.js'
import Environment from './Environment.js'
import Flag from './Flag.js'


export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.flag = new Flag()
            this.environment = new Environment()
        })
    }

    update()
    {
        if(this.flag)
        {
            this.flag.update()
        }
    }
}
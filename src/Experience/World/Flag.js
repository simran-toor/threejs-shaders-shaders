import * as THREE from 'three'
import Experience from '../Experience.js'
import FlagMaterial from '../Materials/FlagMaterial.js'

export default class Flag
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('uFrequency')
        }

        // Setup
        this.resource = this.resources.items.flagTexture

        this.setFlag()
    }
    
    setFlag()
    {
        this.flag = {}
    
        /**Test mesh */
        // Geometry
        this.flag.geometry = new THREE.PlaneGeometry(1, 1, 32, 32)

        const count = this.flag.geometry.attributes.position.count
        const randoms = new Float32Array(count)

        for(let i = 0; i < count; i++)
        {
            randoms[i] = Math.random()
        }

        this.flag.geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))

        // Material
        this.flag.material = new FlagMaterial()

        // Mesh
        this.flag.mesh = new THREE.Mesh(
            this.flag.geometry,
            this.flag.material
        )
        this.flag.mesh.scale.y = 2/3
        this.scene.add(this.flag.mesh)

        // Debug
        if(this.debug.active)
        {
            this.debugFolder.add(this.flag.material.uniforms.uFrequency.value, 'x').min(0).max(20).step(0.01).name('frequencyX')
            this.debugFolder.add(this.flag.material.uniforms.uFrequency.value, 'y').min(0).max(20).step(0.01).name('frequencyY')
        }
    }
    

    update()
    {
        this.flag.material.uniforms.uTime.value = this.time.elapsed 
    }
}


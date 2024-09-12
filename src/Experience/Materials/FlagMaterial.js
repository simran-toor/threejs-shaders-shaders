import * as THREE from 'three'

import testVertexShader from '../shaders/test/vertex.glsl'
import testFragmentShader from '../shaders/test/fragment.glsl'

function FlagMaterial()
{
    const textureLoader = new THREE.TextureLoader()
    const flagTexture = textureLoader.load('/textures/flag-french.jpg')

    const material = new THREE.RawShaderMaterial({
        vertexShader: testVertexShader,
        fragmentShader: testFragmentShader,
        uniforms:
        {
            uFrequency: { value: new THREE.Vector2(10, 5) },
            uTime: { value: 0 },
            uColor: { value: new THREE.Color('orange') },
            uTexture: { value: flagTexture }
        }
    })

    return material

}

export default FlagMaterial
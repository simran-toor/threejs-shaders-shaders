precision mediump float;

uniform vec3 uColor;
uniform sampler2D uTexture;

varying vec2 vUv;

// varying float vRandom;

void main()
{
    vec4 textureColor = texture2D(uTexture, vUv);
    gl_FragColor = textureColor;

    // gl_FragColor = vec4(vRandom, vRandom * 0.5, 1.0, 1.0);
}
const Particles = () => {
    const count = 500;
    const positions = [];
    const colors = [];

    // Define the range for particle positions
    const range = 50; 
    const height = 20; // The height of particles
    const minY = 4; // Minimum height 

    for (let i = 0; i < count; i++) {
        let y = (Math.random() - 0.5) * height; //  y position 

        if (y > minY) {
            positions.push((Math.random() - 0.5) * range); // for x
            positions.push(y); // y position above minY
            positions.push((Math.random() - 0.5) * range); // for z

            colors.push(Math.random());
            colors.push(Math.random());
            colors.push(Math.random());
        }
    }

    return (
        <>
            <points>
                <bufferGeometry>
                    <bufferAttribute attach={"attributes-position"} count={positions.length / 3} array={new Float32Array(positions)} itemSize={3} />
                    <bufferAttribute attach={"attributes-color"} count={colors.length / 3} array={new Float32Array(colors)} itemSize={3} />
                </bufferGeometry>
                <pointsMaterial size={0.1} vertexColors={true} />
            </points>
        </>
    );
};

export default Particles;

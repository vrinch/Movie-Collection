function run(n, m, movies) {
    // Initialize the stack with movies in increasing order
    let stack = Array.from({length: n}, (_, i) => i + 1);
    let positionMap = new Map(stack.map((movie, index) => [movie, index]));
    let result = [];

    for (let i = 0; i < m; i++) {
        let movie = movies[i];
        let currentPos = positionMap.get(movie);

        // Append the result
        result.push(currentPos);

        // Move movie to the top of the stack
        // Remove the movie from its current position
        stack.splice(currentPos, 1);
        // Add the movie to the top of the stack
        stack.unshift(movie);

        // Update positions in the map
        for (let j = 0; j < stack.length; j++) {
            positionMap.set(stack[j], j);
        }
    }

    return result.join(",");
}

// Example usage
console.log(run(84, 887, Array.from({length: 887}, (_, i) => (i % 84) + 1)));

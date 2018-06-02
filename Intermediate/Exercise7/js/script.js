function printMatrix(matrix){
    for(let i = 0; i < matrix.length; i++){
        let line = "";
        for(let j = 0; j < matrix[i].length;j++){
            line += matrix[i][j] + "\t";
        }
        console.log(line);
    }
}

function convertColumnToRow(column) {
    let rows = [];
    for (let i = 0; i < column.length; i++) {
        rows.push([column[i]]);
    }
    return rows;
}

function transformMatrix(matrix) {
    let transformedMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        let rows = convertColumnToRow(matrix[i]);
        for (let j = 0; j < rows.length; j++) {
            if (transformedMatrix[j] === undefined) {
                transformedMatrix[j] = [];
            }
            transformedMatrix[j].push(rows[j][0]);
        }
    }
    return transformedMatrix;
}

let matrix = [[1, 2, 3],
              [4, 5, 6]];

let matrix2 = [[1, 2, 3],
               [4, 5, 6],
               [7, 8, 9],
               [10, 11, 12]];

let matrix3 = [[1, 2],
               [3, 4, 5, 6, 7],
               [8, 9, 10]];

let matrices = [matrix, matrix2, matrix3];

for(let i = 0; i < matrices.length;i++){
    console.log("Before");
    printMatrix(matrices[i]);
    console.log("After");
    printMatrix(transformMatrix(matrices[i]));
}
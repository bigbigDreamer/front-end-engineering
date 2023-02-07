module.exports = {
    "presets": [
        "@babel/preset-typescript", // add here
        [
            "@babel/preset-env", {
               loose: true
             }
        ],
        ["@babel/preset-react", {
            "runtime": "automatic"
        }]

    ]
}

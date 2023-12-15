module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-typescript',
      {
        allExtensions: true, //支持所有文件扩展名
      },
    ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        style: true,
      },
    ],
  ],
};

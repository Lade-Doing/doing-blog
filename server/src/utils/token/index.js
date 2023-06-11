const jwt = require('jsonwebtoken');

/**
 * 生成 Token
 * @param {object} payload 载荷数据（存放在token里面的数据）
 * @param {string} secretKey 密钥
 * @param {string|number} expiresIn 过期时间
 * @returns {string} 返回生成的 Token
 */
function generateToken(payload, secretKey, expiresIn) {
  const token = jwt.sign(payload, secretKey, { expiresIn }); // 生成 token，并设置过期时间
  return token;
}


/**
 * 解析 Token
 * @param {string} token Token 字符串
 * @param {string} secretKey 密钥
 * @returns {object|null} 如果验证成功，则返回解析后的载荷数据；否则返回 null。
 */
function verifyToken(token, secretKey) {
    try {
      const decodedToken = jwt.verify(token, secretKey); // 解析 token，并验证签名和过期时间
      return decodedToken;
    } catch (error) {
      return null;
    }
}


module.exports = {
    generateToken,
    verifyToken
}
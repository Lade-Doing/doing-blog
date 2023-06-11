const bcrypt = require('bcryptjs');

/**
 * 加密密码
 * @param {string} plainPassword 明文密码
 * @returns {Promise<string>} 返回加密后的密码
 */
async function hashPassword(plainPassword) {
  const salt = await bcrypt.genSalt(10); // 生成随机盐值
  const hashedPassword = await bcrypt.hash(plainPassword, salt); // 对明文密码进行加密
  return hashedPassword;
}


/**
 * 比较密码是否匹配
 * @param {string} plainPassword 明文密码
 * @param {string} hashedPassword 加密后的密码
 * @returns {Promise<boolean>} 如果密码匹配，则返回 true；否则返回 false。
 */
async function comparePassword(plainPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword); // 比较明文密码和加密后的密码是否匹配
  return isMatch;
}


module.exports = {
  hashPassword,
  comparePassword
}
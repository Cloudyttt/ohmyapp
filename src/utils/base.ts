
/**
 * 比较两个变量值是否相等
 * @param a
 * @param b
 * @returns
 */
export function isSameValue(a: any, b: any): boolean {
  // 如果 a 和 b 都是对象（包括数组和普通对象）
  if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
    // 如果 a 和 b 的键的数量不同，返回 false
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    // 遍历 a 的每一个键
    for (let key in a) {
      // 如果 b 也有这个键，并且这两个键的值相等（递归调用 isSameValue）
      if (b.hasOwnProperty(key) && isSameValue(a[key], b[key])) {
        continue;
      }

      // 否则，返回 false
      return false;
    }

    // 如果所有键的值都相等，返回 true
    return true;
  }

  // 如果 a 和 b 都不是对象，直接比较它们的值
  return a === b;
}

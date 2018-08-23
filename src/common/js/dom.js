export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

// 获取元素上的data-属性的值或者赋值
export function getData(el, name, val) {
  console.log(el)
  console.log(name)
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    console.log('1:' + val)
    return el.setAttribute(name, val)
  } else {
    console.log('2:' + val)
    return el.getAttribute(name)
  }
}

// 判断当前浏览器动态实现css加前缀
let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

// 实现Object深拷贝

// 判断变量的类型
// function getType(obj) {
//   var str = Object.prototype.toString.call(obj)
//   var map = {
//     '[object Boolean]': 'boolean',
//     '[object Number]': 'number',
//     '[object String]': 'string',
//     '[object Function]': 'function',
//     '[object Array]': 'array',
//     '[object Date]': 'date',
//     '[object RegExp]': 'regExp',
//     '[object Undefined]': 'undefined',
//     '[object Null]': 'null',
//     '[object Object]': 'object'
//   }
//   // 判断是否是dom元素，如div等
//   if (obj instanceof Element) {
//     return 'element'
//   }
//   return map[str]
// }
//
// // 深拷贝函数
// export function deepCopy(p) {
//   var obj
//   var str = getType(p)
//   if (str === 'array') {
//     obj = []
//     for (let i = 0; i < p.length; i++) {
//       obj.push(deepCopy(p[i]))
//     }
//   } else if (str === 'object') {
//     obj = {}
//     for (let i in p) {
//       obj[i] = deepCopy(p[i])
//     }
//   } else {
//     return p
//   }
//   return obj
// }

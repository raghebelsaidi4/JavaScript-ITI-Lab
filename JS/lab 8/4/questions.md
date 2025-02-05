### **Can JSON Hold `null` and Boolean Values?** 
**Yes, JSON supports `null` and Boolean (`true`/`false`) values.**
- Example of `null`: `"address": null` (used in **Jane Smith's** object).
- Example of Boolean: `"isLeader": true` / `"isLeader": false`.

---

### **Differences Between XML and JSON**
| Feature        | JSON | XML |
|---------------|------|-----|
| **Format** | Key-value pairs | Uses tags (`<tag>value</tag>`) |
| **Readability** | More readable, less verbose | More complex, uses opening & closing tags |
| **Data Type Support** | Supports numbers, strings, Booleans, arrays, objects, and `null` | Everything is a string (no direct Boolean or number support) |
| **Structure** | Uses `{}` for objects and `[]` for arrays | Uses nested tags for hierarchy |
| **Performance** | Faster parsing, lightweight | Slower due to extra tags |
| **Usage** | Common in web APIs (RESTful services) | Used in older APIs, config files, and structured data exchange (e.g., SOAP) |

---

### **Which One is Better?**
- **Use JSON** when working with **web APIs**, JavaScript, and modern applications.
- **Use XML** when dealing with **legacy systems** or **structured documents** (like RSS feeds).


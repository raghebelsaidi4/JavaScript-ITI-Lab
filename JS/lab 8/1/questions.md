you can use **session storage** instead of **local storage** in your previous assignment. However, there is a key difference:

### **Difference Between Local Storage and Session Storage**
| Feature          | Local Storage | Session Storage |
|-----------------|--------------|----------------|
| **Persistence**  | Data stays even after closing the browser/tab. | Data is lost when the tab or browser is closed. |
| **Scope**        | Available across all tabs and windows of the same origin. | Only available within the same tab. |
| **Use Case**     | Good for long-term data storage (e.g., user preferences). | Best for temporary data (e.g., form inputs in a single session). |

### **Can You Access Local Storage and Session Storage on Another Page (Same Site)?**
- **Local Storage**: Yes, any page on the same origin (same domain, protocol, and port) can access the stored data.
- **Session Storage**: No, it's only accessible within the same tab where it was created. If you open a new tab, the session storage will be empty.

If you want user credentials to persist across different sessions, **local storage** is the better option. If you only need to store credentials temporarily (until the tab is closed), you can use **session storage**. However, storing passwords in either storage method is insecure—consider using secure authentication mechanisms like JWT or session cookies instead.
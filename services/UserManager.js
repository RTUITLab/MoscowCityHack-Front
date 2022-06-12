export class UserManager {
 getRole() {
  return localStorage.getItem('ROLE');
 }

 getUser() {
  if (this.getRole() === 'ROLE_VOLUNTEER') {
  }
 }
}

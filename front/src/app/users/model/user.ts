export interface User {
  id: number;
  username: string;
  password: string;
  enabled: boolean;
  registerDate: Date;
  name: string;
  surname: string;
  email: string;
  phone: string;

  // constructor(id?: number, username?: string, password?: string, name?: string, surname?: string, email?: string, phone?: string, enabled?: boolean, registerDate?: Date ) {
  //   this.id = id || 0;
  //   this.username = username || '';
  //   this.password = password || '';
  //   this.name = name || '';
  //   this.surname = surname || '';
  //   this.email = email || '';
  //   this.phone = phone || '';
  //   this.enabled = enabled || true;
  //   this.registerDate = registerDate || new Date();
  // }
}

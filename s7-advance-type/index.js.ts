type DatabaseData = {
  name: string;
  age: number;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  lastLogin: Date | null;
  roles: string[];
  profilePictureUrl?: string; // optional property

}

type Status = {
  isConnected: boolean;
  connectionString: string;
  lastConnectionAttempt: Date | null;
  errorMessage?: string; // optional property
  retryCount: number;
  maxRetries: number;
  retryDelay: number;
  connectionTimeout: number;
}

type Connection = {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  reconnect: () => Promise<void>;
  getConnectionString: () => string;
  setConnectionString: (connectionString: string) => void;
  onConnectionError: (callback: (error: Error) => void) => void;
}

type DB = DatabaseData & Status & Connection;

const db: DB = {
  createdAt: new Date(),
  age: 0,
  connect(): Promise<void> {
    return Promise.resolve(undefined);
  },
  connectionString: "",
  connectionTimeout: 0,
  disconnect(): Promise<void> {
    return Promise.resolve(undefined);
  },
  email: "",
  getConnectionString(): string {
    return "";
  },
  isActive: false,
  isConnected: false,
  lastConnectionAttempt: null,
  lastLogin: null,
  maxRetries: 0,
  name: "",
  onConnectionError(callback: (error: Error) => void): void {
  },
  password: "",
  reconnect(): Promise<void> {
    return Promise.resolve(undefined);
  },
  retryCount: 0,
  retryDelay: 0,
  roles: [],
  setConnectionString(connectionString: string): void {
  },
  updatedAt: new Date()
}

console.log(db);
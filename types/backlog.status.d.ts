declare namespace NSBacklog {
  interface Status {
    color: string;
    displayOrder: number;
    id: number;
    name: string;
    projectId: number;
    defaultChecked?: boolean;
  }

  namespace Query {}
}

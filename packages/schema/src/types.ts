/* eslint-disable */
import type { Prisma, User, Workspace, Page, Folder } from "@prisma/client";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "pages" | "workspaces";
        ListRelations: "pages" | "workspaces";
        Relations: {
            pages: {
                Shape: Page[];
                Name: "Page";
                Nullable: false;
            };
            workspaces: {
                Shape: Workspace[];
                Name: "Workspace";
                Nullable: false;
            };
        };
    };
    Workspace: {
        Name: "Workspace";
        Shape: Workspace;
        Include: Prisma.WorkspaceInclude;
        Select: Prisma.WorkspaceSelect;
        OrderBy: Prisma.WorkspaceOrderByWithRelationInput;
        WhereUnique: Prisma.WorkspaceWhereUniqueInput;
        Where: Prisma.WorkspaceWhereInput;
        Create: {};
        Update: {};
        RelationName: "author" | "folders" | "pages";
        ListRelations: "folders" | "pages";
        Relations: {
            author: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            folders: {
                Shape: Folder[];
                Name: "Folder";
                Nullable: false;
            };
            pages: {
                Shape: Page[];
                Name: "Page";
                Nullable: false;
            };
        };
    };
    Page: {
        Name: "Page";
        Shape: Page;
        Include: Prisma.PageInclude;
        Select: Prisma.PageSelect;
        OrderBy: Prisma.PageOrderByWithRelationInput;
        WhereUnique: Prisma.PageWhereUniqueInput;
        Where: Prisma.PageWhereInput;
        Create: {};
        Update: {};
        RelationName: "folder" | "author" | "workspace";
        ListRelations: never;
        Relations: {
            folder: {
                Shape: Folder | null;
                Name: "Folder";
                Nullable: true;
            };
            author: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            workspace: {
                Shape: Workspace;
                Name: "Workspace";
                Nullable: false;
            };
        };
    };
    Folder: {
        Name: "Folder";
        Shape: Folder;
        Include: Prisma.FolderInclude;
        Select: Prisma.FolderSelect;
        OrderBy: Prisma.FolderOrderByWithRelationInput;
        WhereUnique: Prisma.FolderWhereUniqueInput;
        Where: Prisma.FolderWhereInput;
        Create: {};
        Update: {};
        RelationName: "pages" | "workspace";
        ListRelations: "pages";
        Relations: {
            pages: {
                Shape: Page[];
                Name: "Page";
                Nullable: false;
            };
            workspace: {
                Shape: Workspace;
                Name: "Workspace";
                Nullable: false;
            };
        };
    };
}
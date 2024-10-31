/*
  Warnings:

  - Added the required column `description` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client_id" TEXT NOT NULL,
    "client_secret" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "redirect_uri" TEXT NOT NULL,
    "balance" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT '',
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);
INSERT INTO "new_Application" ("balance", "client_id", "client_secret", "create_at", "id", "name", "redirect_uri", "status", "update_at") SELECT "balance", "client_id", "client_secret", "create_at", "id", "name", "redirect_uri", "status", "update_at" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
CREATE UNIQUE INDEX "Application_id_key" ON "Application"("id");
CREATE UNIQUE INDEX "Application_client_id_key" ON "Application"("client_id");
CREATE UNIQUE INDEX "Application_client_secret_key" ON "Application"("client_secret");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

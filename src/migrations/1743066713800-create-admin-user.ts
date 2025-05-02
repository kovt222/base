import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAdminUser1743066713800 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO "user" ("username", "fullname", "email", "password", "role", "invite_code") values ('admin', 'admin', 'admin@gmail.com', '$2b$12$HhDdsgLphzghbUs6gTazoeI/MeNn79TAG3k7xGAyt4/QqSOsmpOrC', 'ADMIN','admin')`,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "user" WHERE "email" = 'admin@gmail.com'`);

    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDb1743066698191 implements MigrationInterface {
    name = 'InitDb1743066698191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_deleted" boolean NOT NULL DEFAULT false, "is_hidden" boolean NOT NULL DEFAULT false, "username" character varying NOT NULL, "fullname" character varying DEFAULT 'user', "email" character varying, "email_confirmed" boolean NOT NULL DEFAULT false, "password" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'USER', "money" bigint DEFAULT '0', "phone" character varying, "invite_code" character varying NOT NULL, "parent_id" integer, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_afbd6aa2cb8da01c11e1f9519f9" UNIQUE ("invite_code"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_username" ON "user" ("username") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_invite_code" ON "user" ("invite_code") `);
        await queryRunner.query(`CREATE TABLE "history" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_deleted" boolean NOT NULL DEFAULT false, "is_hidden" boolean NOT NULL DEFAULT false, "type" character varying NOT NULL, "message" text NOT NULL, "information" text, "user_id" integer, "total" bigint, CONSTRAINT "PK_9384942edf4804b38ca0ee51416" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_acb096eef4d8b5acdd7acbb5c84" FOREIGN KEY ("parent_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "history" ADD CONSTRAINT "FK_ea92daa642af67e2a924a5547d5" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "history" DROP CONSTRAINT "FK_ea92daa642af67e2a924a5547d5"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_acb096eef4d8b5acdd7acbb5c84"`);
        await queryRunner.query(`DROP TABLE "history"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_invite_code"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_username"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}

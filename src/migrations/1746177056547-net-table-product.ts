import { MigrationInterface, QueryRunner } from "typeorm";

export class NetTableProduct1746177056547 implements MigrationInterface {
    name = 'NetTableProduct1746177056547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_deleted" boolean NOT NULL DEFAULT false, "is_hidden" boolean NOT NULL DEFAULT false, "name" character varying, "slug" character varying NOT NULL, "amount" integer NOT NULL DEFAULT '0', "price" bigint NOT NULL DEFAULT '0', "is_sold" boolean NOT NULL DEFAULT false, "sold_at" TIMESTAMP, "buyer_id" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "product_slug_idx" ON "product" ("slug") `);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_8115af89f0c3113667ab837fd27" FOREIGN KEY ("buyer_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_8115af89f0c3113667ab837fd27"`);
        await queryRunner.query(`DROP INDEX "public"."product_slug_idx"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}

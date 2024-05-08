import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1715117560940 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
      );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

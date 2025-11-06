import { Entity, PrimaryColumn, Column, Index } from 'typeorm';

@Entity({ name: 'contacts' })
export class Contact {
  @PrimaryColumn()
  id: string;

  @Index()
  @Column({ nullable: true })
  email: string | null;

  @Column({ nullable: true })
  firstname: string | null;

  @Column({ nullable: true })
  lastname: string | null;

  @Column({ name: 'created_at', nullable: true, type: 'timestamptz' })
  createdAt: Date | null;

  @Index()
  @Column({ nullable: true })
  country: string | null;

  @Column({ nullable: true })
  lifecycleStage: string | null;
}

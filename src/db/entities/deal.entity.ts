import { Entity, PrimaryColumn, Column, Index } from 'typeorm';

@Entity({ name: 'deals' })
export class Deal {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  dealname: string | null;

  @Index()
  @Column({ nullable: true, type: 'numeric' })
  amount: number | null;

  @Column({ name: 'closed_at', nullable: true, type: 'timestamptz' })
  closedAt: Date | null;

  @Index()
  @Column({ nullable: true })
  stage: string | null;

  @Index()
  @Column({ name: 'contact_id', nullable: true })
  contactId: string | null;
}

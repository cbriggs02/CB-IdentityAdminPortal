import { GlobalRole } from '../../../../enums/roles.enum';

/**
 * @Author Christian Briglio
 * @Created 2025
 *
 * Role - Represents a role assigned to a user in the system.
 */
export interface Role {
  /** Unique identifier of the role. */
  readonly id: string;

  /** Name of the role, defined by the GlobalRole enum. */
  readonly name: GlobalRole;
}

# CampusConnect Architecture

Browser → Next.js Web App → server-side RBAC/API → PostgreSQL/Prisma. The application layer also integrates with Microsoft Entra ID and Microsoft Graph for Teams, Outlook/Calendar and SharePoint/OneDrive, with asynchronous notification work behind a queue/worker boundary.

## Security
The prototype role selector is demonstration-only. Production authorization must be enforced server-side for every protected route and mutation. Sensitive actions should generate audit events.

## Integration boundary
The master specification calls for Entra authentication, Teams collaboration, Outlook notifications/calendar events, SharePoint/OneDrive storage and Graph webhooks. Tenant registration, permissions, service identities and institutional approval are required before production activation. No secrets or tokens belong in source control.
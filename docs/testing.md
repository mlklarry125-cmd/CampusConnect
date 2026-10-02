# Testing Strategy

## Unit/component
Validate domain helpers, status transitions, form validation and reusable UI components.

## Integration
Validate API authorization, persistence, application lifecycle, placement lifecycle, feedback submission and audit event creation.

## End-to-end
Primary journeys: sign-in → opportunities → opportunity detail → application → status; employer opportunity → application review; coordinator placement → supervisor assignment → feedback → report.

## Security tests
Attempt protected mutations with missing/incorrect roles. Confirm authorization is enforced server-side and audit events are emitted for sensitive actions.

## Prototype acceptance
Synthetic data only; no credentials in source; no production tenant identifiers; responsive layouts; build passes in CI.
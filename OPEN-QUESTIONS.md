# ShipNest docs — open questions and items to verify

Verified against stage.shipnest.ai on 7 Oct 2026, logged in as a non-admin user.

## Not accessible with the account used (not documented in detail)
- Admin → User Management ("You don't have permission to manage users")
- Admin → Organization ("You don't have permission to view organization settings")
- Admin → My Account (page body was empty)
- Unused Labels page (/shipments/unused-labels — "You don't have access to this page"). Referenced from Shipping & rates → Unused label detection.
- The header gear icon showed no panel.

## Actions not clicked (they change real orders) — wording based on UI labels / old docs
- Ship (row), Ship all, Ship with Shopify, Update and ship, Create and ship, Create return and ship
- Cancel, Void, Clone, Clone with items, + Shipment, Labels (PDF) download, Orders in CSV/Excel
- Retry sync / sync per marketplace
- Exact result of Labels (PDF) and Ship all (assumed: acts on selected orders / button count)

## Conflicts between old docs and the current app (docs follow the app)
- Shopify connects with Web store name + Access token (old docs: OAuth / login redirect with Shop Domain).
- WooCommerce is a supported marketplace (missing in old docs).
- Webstores have an Active switch + Edit only (old docs: separate Disable and Deactivate actions).
- Tags are created on Configurations → Tags (old guide: created from the Shipments screen).
- Order classification supports else-if branches + Otherwise (old guide: flat filter + action).
- Automation templates now: Order validation, Order classification, Packages Historical Autofill, Make your package, DSR rule, Select shipping service, Fetch Rates, Fallback Selection (old overview listed a "Ship" template).
- Printing menu: Printers, Print Jobs, Configure Agent only (old docs mentioned Agents and Users admin pages).
- Failed print job page says to use Reprint from the shipment (old docs: failed jobs can be re-submitted from Jobs).
- New features not in old docs: Reports module, Account settings (Shipping & rates, Address validation, Picking & fulfillment, Keyboard shortcuts), filter sets, Customize tabs, sync alert settings, Slip Preview window, Fallback Selection "Re-pick the courier service".

## Please confirm
1. Support email address and WhatsApp number to publish (Support page currently says "provided to your organization").
2. Role table (Admin / User / Warehouse) is taken from the old docs — still correct?
3. One existing webstore shows a generic marketplace icon — is there a generic/custom marketplace type to document?
4. Carrier settings lists Shopify and Amazon accounts, but "New carrier" only offers UPS/FedEx/USPS — how are those created?
5. USPS "Default Package Type" list showed FedEx packages — expected or a bug?
6. Reports → Shipment tab: all three reports showed "This report could not be loaded" on stage.
7. AccessWise/SSO and MFA sign-in (from old docs) — the PrintWise agent uses "Sign in with 99-IAM". Should sign-in be documented?
8. What does the green "?" help button do? (It showed "You're all set.")

## Test data created on stage (please delete when done)
- Tag "DOCS TEST"
- Automation rule "DOCS TEST - PO Box check" (Order validation, Test mode)
- Custom report "DOCS TEST - Orders by marketplace"
- Draft orders auto-created by opening New shipment / Return shipment / Return (marketplace ShipNest, empty)
- One scan of "DOCSTEST0001" (Not Found) on Scan Labels (session only)

## Screenshots
Personal data (customer address, phone, user email) has been blurred or blanked. Re-take screenshots on a demo account before publishing externally if preferred.

## Sprint update (21 Oct 2026) — not verified in the app
- **Downtime notice banner** — no downtime was scheduled, so the banner and its collapsed "Update" reminder couldn't be seen or captured. Documented from the sprint demo. The banner colour (yellow vs. green) was still under discussion.
- **Retry BTO sync** — the account used doesn't use BTO, so the manual retry option wasn't visible. Documented from the demo.
- **Ship with Shopify for non-Shopify orders** — the new error message wasn't triggered (it would mean bulk-shipping real orders). Documented from the demo and release notes.
- **AccountWise orders** — connection uses the tenant's IAM login and service token; no setup screen was found in ShipNest, so it's only mentioned on the What's new page.
- **Failed (n) retry in Label downloads** — the button's label says it retries failed items; it wasn't clicked, to avoid producing labels.
- **Internal items not documented as user features**: tenant isolation is documented as "Your data and privacy"; SonarQube clean-up, unit tests, Amazon sandbox in dev/QA, logging and cron/timeout changes are internal and only summarised where they affect users.

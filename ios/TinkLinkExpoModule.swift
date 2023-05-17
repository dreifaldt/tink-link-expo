import ExpoModulesCore
import TinkLinkUI

public class TinkLinkExpoModule: Module {
    public func definition() -> ModuleDefinition {
        Name("TinkLinkExpo")

        Function("init") { (clientId: String, appURI: String, scopes: [String]?, market: String?) -> Void in
            guard let appURI = URL(string: appURI) else {
                print("Invalid app URI")
                return
            }

            let configuration = TinkLinkConfiguration(clientID: clientId, appURI: appURI)
            let linkHandler = TinkLinkHandler(configuration: configuration)

            var accessTypes = [String]()
            for scope in scopes {
                switch scope {
                case "accounts.read":
                    accessTypes.append(.accounts(.read))
                case "accounts.write":
                    accessTypes.append(.accounts(.write))
                case "transactions.read":
                    accessTypes.append(.transactions(.read))
                case "transactions.write":
                    accessTypes.append(.transactions(.write))
                default:
                    print("Unknown scope: \(scope)")
                }
            }

            let tinkLinkViewController = TinkLinkViewController(configuration: configuration, market: market,scopes: accessTypes) { result in
                // Handle result
                print(result)
            }

            UIApplication.shared.windows.first?.rootViewController?.present(tinkLinkViewController, animated: true)

            return ()
        }
    }
}
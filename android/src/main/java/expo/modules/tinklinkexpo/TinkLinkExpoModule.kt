package expo.modules.tinklinkexpo

import android.content.Context
import android.content.Intent
import com.tink.link.ui.LinkActivity
import com.tink.link.ui.TinkLinkUI
import com.tink.model.user.Scope
import expo.modules.core.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.modules.Name
import expo.modules.kotlin.modules.AsyncFunction
import java.net.URL

class TinkLinkExpoModule : Module() {
    override fun definition(): ModuleDefinition = ModuleDefinition.async {
        Name("TinkLinkExpo")

        Function("init") { clientId: String, appURI: String, scopes: List<String>?, market: String? ->
            val context = moduleRegistryDelegate.context
            val linkHandle = TinkLinkUI.create(context)
                .linkHandle(clientId)
                .appUri(URL(appURI))
                .market(market)
                .scopes(scopes?.map { Scope.valueOf(it.toUpperCase()) } ?: emptyList())
                .build()

            val intent = LinkActivity.createIntent(context, linkHandle)
            getCurrentActivity()?.startActivityForResult(intent, 1)

            null
        }
    }
}
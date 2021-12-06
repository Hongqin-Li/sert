(function() {var implementors = {};
implementors["kdevice"] = [{"text":"impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kdevice/cache/struct.CacheNodePtr.html\" title=\"struct kdevice::cache::CacheNodePtr\">CacheNodePtr</a>&lt;K, V&gt;","synthetic":false,"types":["kdevice::cache::CacheNodePtr"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"kdevice/cache/trait.Cache.html\" title=\"trait kdevice::cache::Cache\">Cache</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"kdevice/cache/struct.CacheGuard.html\" title=\"struct kdevice::cache::CacheGuard\">CacheGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["kdevice::cache::CacheGuard"]}];
implementors["ksched"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ksched/sync/struct.MutexGuard.html\" title=\"struct ksched::sync::MutexGuard\">MutexGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["ksched::mutex::MutexGuard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ksched/sync/struct.RwLockReadGuard.html\" title=\"struct ksched::sync::RwLockReadGuard\">RwLockReadGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["ksched::rwlock::RwLockReadGuard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ksched/sync/struct.RwLockUpgradableReadGuard.html\" title=\"struct ksched::sync::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["ksched::rwlock::RwLockUpgradableReadGuard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ksched/sync/struct.RwLockWriteGuard.html\" title=\"struct ksched::sync::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["ksched::rwlock::RwLockWriteGuard"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()